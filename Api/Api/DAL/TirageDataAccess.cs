using System.Globalization;

namespace Api.DAL
{

    public interface ITirageDataAccess
    {
        List<TirageResult> LoadFromFile();
    }

    public class TirageDataAccess : ITirageDataAccess
    {
        //hack : avoid useless re read of the data
        private List<TirageResult> _tirages = null;

        public List<TirageResult> LoadFromFile()
        {
            if (_tirages == null)
            {
                var cultureInfo = new CultureInfo("fr-FR");


                string folder = @"RawData";
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
                            Date = DateTime.Parse(data[0], cultureInfo),
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
                _tirages = tirages.OrderBy(x => x.Date).ToList();
            }

            return _tirages;
        }


    }
}
