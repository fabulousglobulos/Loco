using Api.DAL;

namespace Api.Services
{

    public interface ITirageService
    {
        List<TirageResult> Raw(DateTime from, DateTime to);

        List<Series> SeriesAllAdditionalNumber(DateTime from, DateTime to);

        List<Series> SeriesUniquelAdditionalNumber(DateTime from, DateTime to);
    }

    public class TirageService : ITirageService
    {

        private readonly ILogger<TirageService> _logger;
        private readonly ITirageDataAccess _dataAccess;

        public TirageService(ILogger<TirageService> logger, ITirageDataAccess dataAccess)
        {
            _logger = logger;
            _dataAccess = dataAccess;
        }

        public List<TirageResult> Raw(DateTime from, DateTime to)
        {
            var raw = _dataAccess.LoadFromFile().Where(r => r.Date >= from && r.Date <= to).ToList();
            return raw;
        }

        public List<Series> SeriesAllAdditionalNumber(DateTime from, DateTime to)
        {

            var raw = _dataAccess.LoadFromFile().Where(r => r.Date >= from && r.Date <= to).ToList();



            var series = Enumerable.Range(1, 10).Select(x => new Series() { name = x.ToString() }).ToList();
            raw.ForEach(r =>
            {
                series.ForEach(s =>
                {
                    s.series.Add(new Serie() { name = r.Date.ToString("yyyy MM dd"), value = r.Complementaire == Convert.ToInt32(s.name) ? 1 : 0 });
                });
            });

            int numberOfEchantillon = raw.Count();

            series.ForEach(s =>
            {
                var numerateur = Convert.ToDecimal(100 * s.series.Sum(x => x.value));
                var denominateur = Convert.ToDecimal(numberOfEchantillon);
                var ratio = Math.Round(numerateur / denominateur, 2);
                s.name += "  ( " + ratio.ToString() + " % )";
            });

            return series;
        }


        public List<Series> SeriesUniquelAdditionalNumber(DateTime from, DateTime to)
        {

            var raw = _dataAccess.LoadFromFile().Where(r => r.Date >= from && r.Date <= to).ToList();

            var series = new Series()
            {
                name = "Trend"
            };

            series.series = raw.Select(r => new Serie { name = r.Date.ToString("yyyy MM dd"), value = r.Complementaire }).ToList();

            return new List<Series> { series };

        }
    }
}
