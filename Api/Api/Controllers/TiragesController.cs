using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiragesController : Controller
    {
        private readonly ITirageService _tirageService;

        public TiragesController(ITirageService tirageService)
        {            
            this._tirageService = tirageService;
        }

        [HttpGet("Hello")]
        public ActionResult Hello()
        {
            var raw = _tirageService.Raw(DateTime.MinValue, DateTime.MaxValue);
            return Ok($"Hello from API with {raw.Count()} series");
        }

        [HttpGet("Raw")]
        public ActionResult Raw()
        {
            var raw = _tirageService.Raw(DateTime.MinValue, DateTime.MaxValue);
            return Ok(raw);
        }


        [HttpGet("SeriesAllAdditionalNumber")]
        public ActionResult SeriesAllAdditionalNumber(DateTime from, DateTime to)
        {
            Console.WriteLine($"Getting Seriesresult for SeriesAllAdditionalNumber from:{from.ToString("d")} to:{to.ToString("d")}");

            return Ok(_tirageService.SeriesAllAdditionalNumber(from, to));
        }

        [HttpGet("SeriesUniqueAdditionalNumber")]
        public ActionResult SeriesUniqueAdditionalNumber(DateTime from, DateTime to)
        {
            Console.WriteLine($"Getting Seriesresult for SeriesUniqueAdditionalNumber from:{from.ToString("d")} to:{to.ToString("d")}");

            return Ok(_tirageService.SeriesUniquelAdditionalNumber(from, to));
        }
    }
}
