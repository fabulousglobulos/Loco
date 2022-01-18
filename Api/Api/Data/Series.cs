namespace Api
{
    public class Series
    {
        public Series()
        {
            series = new List<Serie>();
        }

        public string name { get; set; }

        public List<Serie> series { get; set; }

    }

    public class Serie
    {

        public string name { get; set; }

        public int value { get; set; }
    }

}