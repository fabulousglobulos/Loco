namespace Api.Services
{

    public interface ITirageService
    {
        List<TirageResult> LoadFromFile();

        List<Series> SeriesAllAdditionalNumber(DateTime from, DateTime to);

        List<Series> SeriesUniquelAdditionalNumber(DateTime from, DateTime to);
    }

    public class TirageService : ITirageService
    {

        private readonly ILogger<TirageService> _logger;

        public TirageService(ILogger<TirageService> logger)
        {
            _logger = logger;
        }

        public List<TirageResult> LoadFromFile()
        {
            string folder = @"C:\Users\Vincent\Documents\dev\loto";
            List<TirageResult> tirages = new List<TirageResult>();
            var csvs = Directory.EnumerateFiles(folder, "*.csv").ToList();
            csvs.ForEach(csvs =>
            {
                var raws = File.ReadAllLines(csvs).ToList();

                raws.ForEach(raw =>
               {
                   var data = raw.Split(';');
                   TirageResult tirage = new TirageResult
                   {
                       Date = Convert.ToDateTime(data[0]),
                       Boule1 = Convert.ToInt32(data[1]),
                       Boule2 = Convert.ToInt32(data[2]),
                       Boule3 = Convert.ToInt32(data[3]),
                       Boule4 = Convert.ToInt32(data[4]),
                       Boule5 = Convert.ToInt32(data[5]),
                       Complementaire = Convert.ToInt32(data[6])
                   };
                   tirages.Add(tirage);
               });

            });
            return tirages.OrderBy(x => x.Date).ToList();
        }

        public List<Series> SeriesAllAdditionalNumber(DateTime from, DateTime to)
        {

            var raw = LoadFromFile().Where(r => r.Date >= from && r.Date <= to).ToList();



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

            var raw = LoadFromFile().Where(r => r.Date >= from && r.Date <= to).ToList();

            var series = new Series()
            {
                name = "Trend"
            };

            series.series = raw.Select(r => new Serie { name = r.Date.ToString("yyyy MM dd"), value = r.Complementaire }).ToList();

            return new List<Series> { series };

        }
    }
}
