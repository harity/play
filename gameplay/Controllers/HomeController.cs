using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace gameplay.Controllers
{
    public class HomeController : Controller
    {
       /// <summary>
       /// 前台登录
       /// </summary>
       /// <returns></returns>
        public ActionResult Login()
        {
            return View();
        }
        /// <summary>
        /// 前台注册
        /// </summary>
        /// <returns></returns>
        public ActionResult Register()
        {
            return View();
        }
        /// <summary>
        /// 第三方注册
        /// </summary>
        /// <returns></returns>
        public ActionResult RegisterOther()
        {
            return View();
        }
        /// <summary>
        /// 忘记密码
        /// </summary>
        /// <returns></returns>
        public ActionResult ForgetPwd()
        {
            return View();
        }
    }
}