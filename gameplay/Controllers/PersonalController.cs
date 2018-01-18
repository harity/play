using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace gameplay.Controllers
{
    public class PersonalController : Controller
    {
        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// 默认页
        /// </summary>
        /// <returns></returns>
        public ActionResult Welcome()
        {
            return View();
        }
        /// <summary>
        /// 大神申请
        /// </summary>
        /// <returns></returns>
        public ActionResult ManitoApply()
        {
            return View();
        }
        /// <summary>
        /// 大神上分
        /// </summary>
        /// <returns></returns>
        public ActionResult ManitoTop()
        {
            return View();
        }
        /// <summary>
        /// 陪玩-娱乐
        /// </summary>
        /// <returns></returns>
        public ActionResult ManitoRecreation()
        {
            return View();
        }
	}
}