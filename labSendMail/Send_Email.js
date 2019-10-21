
const CONFIG = require('./config');
const dotty = require('dotty');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fxhanuman@gmail.com', // your email
        pass: 'bzowutkvmuwrwwsr' // your email password
    }
});

async function Register(req) {
    if ((dotty.exists(req, "body.email") && dotty.exists(req, "body.url"))) {
        console.log("Verify on2");
        // var URL = 'http://www.fxhanuman.com/web/eafx/Member_MailActive.php?chk=' + req.body.digits +
        //     '&email=' + req.body.email;
        var URL = req.body.url;

        mailOptions = {
            from: 'fxhanuman@gmail.com',                   // sender
            to: req.body.email,                // list of receivers
            subject: '🔴 ยืนยันการเป็นสมาชิก FxHanuman.com',      // Mail subject
            html: `<td width="100%" align="center" bgcolor="#bdbcba" style="padding:10px 10px 10px 10px">

        <table width="650" border="0" align="center" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td width="650" bgcolor="#000000">
                        <table width="650" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td width="400" height="60" align="right" bgcolor="#000000">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="font-family:Arial,Helvetica,sans-serif;color:#ffc800;font-size:25px">
                                                        <a href="http://www.FxHanuman.com"
                                                            style="color:#ffc800;text-decoration:none" target="_blank">
                                                            FxHanuman.com </a>
                                                    </td>
                                                    <td width="30"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="650" bgcolor="#FFFFFF" align="left"
                        style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                        <table width="650" border="0" cellspacing="0" cellpadding="0" dir="ltr">
                            <tbody>
                                <tr>
                                    <td width="650">
                                        <table width="650" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>

                                                <tr>
                                                    <td width="30"></td>
                                                    <td width="590" align="left"
                                                        style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                                                        <div style="padding:20px 0px 10px 0px" dir="ltr">
                                                            <font style="font-size:22px;font-weight:bold">
                                                                <font color="#000000" dir="ltr">
                                                                    <span class="il">ยืนยัน</span>
                                                                    <span class="il">อีเมล์</span>ของท่าน</font>
                                                            </font>
                                                        </div>
                                                        <p dir="ltr">ขอบคุณที่ท่านสนใจสมัครสมาชิกกับ <wbr>FxHanuman</p>
                                                            <p dir="ltr">ทำการลงทะเบียนให้เสร็จสมบูรณ์ โปรดคลิก <a
                                                                    style="color:red" href="`+ URL + `" target="_blank">ที่นี่</a>
                                                            </p>

                                                            <!-- <p dir="ltr">หลังจากที่ท่านทำการ<span class="il">ยืนยัน</span>อี<wbr>เมล์แล้ว ท่านจะสามารถล็อกอินไปยังพื้นที่<wbr>สำหรับสมาชิกได้ด้วยการใช้รหั<wbr>สผ่านที่สร้างขึ้นในช่วงขั้<wbr>นตอนการลงทะเบียนและ MT4 ID ที่ท่านได้รับ</p> -->
                                                    </td>
                                                    <td width="30"></td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0"
                                            style="padding:20px 0px 20px 0px">
                                            <tbody>

                                                <tr>
                                                    <td width="125"></td>
                                                    <td width="400">
                                                        <a style="color:#ffffff;text-decoration:none" href="`+ URL + `"
                                                            target="_blank">
                                                            <div align="center"
                                                                style="font-family:Arial,Helvetica,sans-serif;width:400px;background-color:#d50002;border-radius:5px;text-align:center;padding:10px 20px;color:#ffffff;font-size:16px;font-weight:bold;margin:auto">
                                                                <span class="il">ยืนยัน</span><span
                                                                    class="il">อีเมล์</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td width="125"></td>
                                                </tr>

                                                <tr>
                                                    <td colspan="3">
                                                        <!-- <p dir="ltr" align="center"><strong>*
                                                                เพื่อที่จะทำการปกป้องบัญชี<wbr>ของท่าน ลิงก์สำหรับการยืนยั<wbr>นจะสามารถใช้ได้ภายใน 24 ชั่วโมงเท่านั้น</strong>
                                                        </p> -->

                                                        <p dir="ltr" align="center">
                                                            <strong>* ลิงก์สำหรับการยืนยันจะสามารถใช้ได้ภายใน 24 ชั่วโมงเท่านั้น</strong>
                                                        </p>
                                                        <br>
                                                        <div style="padding:0px 0px 0px 30px" dir="ltr" align="left">
                                                            <strong>หรือคัดลอกแล้ววางลิงก์นี้ลงบนเบราว์เซอร์ของคุณ:<br>`+ URL + `</strong>
                                                        </div>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </td>
                                </tr>

                                <tr>
                                    <td width="650">
                                        <table width="650" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr>
                                                    <td width="30"></td>
                                                    <td width="590" align="left"
                                                        style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                                                        <strong>
                                                            <br>ด้วยความเคารพ,<br>
                                                            <br>ทีมงาน FxHanuman<br>
                                                            <br><br>
                                                        </strong>
                                                    </td>
                                                    <td width="30"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="650" height="30" align="center" bgcolor="#000000"
                        style="font-family:Arial,Helvetica,sans-serif;color:#fff;font-size:10px">
                        www.fxhanuman.com
                    </td>
                </tr>

            </tbody>
        </table>
    </td>`
        };

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, info) {
                console.log("Verify -------------");
                //console.log(req.body);
                if (err) {
                    console.log("* Error");
                    console.log(err);

                    reject({
                        status: CONFIG.STATUS.FAIL,
                        err
                    });
                }
                else {
                    console.log("* Success");
                    console.log(info);

                    resolve({
                        status: CONFIG.STATUS.SUCCESS,
                        info
                    });
                }
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            reject({
                status: CONFIG.STATUS.REJECT,
                result: "reject Data"
            });
        });
    }


}

async function Forgetpass(req) {
    if ((dotty.exists(req, "body.email") && dotty.exists(req, "body.url"))) {
        // var URL = 'http://www.fxhanuman.com/web/eafx/Member_MailActive.php?chk=' + req.body.digits +
        //     '&email=' + req.body.email;
        var URL = req.body.url;

        mailOptions = {
            from: 'fxhanuman@gmail.com',                   // sender
            to: req.body.email,                // list of receivers
            subject: '📢 การตั้งรหัสผ่านใหม่  FxHanuman.com',      // Mail subject
            html: `<body>
            <td width="100%" align="center" bgcolor="#bdbcba" style="padding:10px 10px 10px 10px">
        
                <table width="650" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <td width="650" bgcolor="#000000">
                                <table width="650" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td width="400" height="60" align="right" bgcolor="#000000">
                                                <table border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="font-family:Arial,Helvetica,sans-serif;color:#ffc800;font-size:25px">
                                                                <a href="http://www.FxHanuman.com" style="color:#ffc800;text-decoration:none" target="_blank">
                                                                    FxHanuman.com </a>
                                                            </td>
                                                            <td width="30"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="650" bgcolor="#FFFFFF" align="left" style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                                <table width="650" border="0" cellspacing="0" cellpadding="0" dir="ltr">
                                    <tbody>
                                        <tr>
                                            <td width="650">
                                                <table width="650" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
        
                                                        <tr>
                                                            <td width="30"></td>
                                                            <td width="590" align="left" style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                                                                <div style="padding:20px 0px 10px 0px" dir="ltr">
                                                                    <font style="font-size:22px;font-weight:bold">
                                                                        <font color="#000000" dir="ltr"><span class="il">ลืมรหัสผ่าน</span></font>
                                                                    </font>
                                                                </div>
                                                                <p dir="ltr">ทำการตั้งรหัสผ่านใหม่ โปรดคลิก <a style="color:red" href="`+ URL + `" target="_blank">ที่นี่</a>
                                                                </p>
        
                                                                <!-- <p dir="ltr">หลังจากที่ท่านทำการ<span class="il">ยืนยัน</span>อี<wbr>เมล์แล้ว ท่านจะสามารถล็อกอินไปยังพื้นที่<wbr>สำหรับสมาชิกได้ด้วยการใช้รหั<wbr>สผ่านที่สร้างขึ้นในช่วงขั้<wbr>นตอนการลงทะเบียนและ MT4 ID ที่ท่านได้รับ</p> -->
                                                            </td>
                                                            <td width="30"></td>
        
                                                        </tr>
        
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" style="padding:20px 0px 20px 0px">
                                                    <tbody>
        
                                                        <tr>
                                                            <td width="125"></td>
                                                            <td width="400">
                                                                <a style="color:#ffffff;text-decoration:none" href="`+ URL + `" target="_blank">
                                                                    <div align="center" style="font-family:Arial,Helvetica,sans-serif;width:400px;background-color:#d50002;border-radius:5px;text-align:center;padding:10px 20px;color:#ffffff;font-size:16px;font-weight:bold;margin:auto">
                                                                        <span class="il">ตั้งรหัสใหม่</span>
                                                                    </div>
                                                                </a>
                                                            </td>
                                                            <td width="125"></td>
                                                        </tr>
        
                                                        <tr>
                                                            <td colspan="3">
                                                                <!-- <p dir="ltr" align="center"><strong>*
                                                                        เพื่อที่จะทำการปกป้องบัญชี<wbr>ของท่าน ลิงก์สำหรับการยืนยั<wbr>นจะสามารถใช้ได้ภายใน 24 ชั่วโมงเท่านั้น</strong>
                                                                </p> -->
        
                                                                <p dir="ltr" align="center">
                                                                    <strong>* ลิงก์สำหรับการตั้งรหัสใหม่จะสามารถใช้ได้ภายใน 24 ชั่วโมงเท่านั้น</strong>
                                                                </p>
                                                                <br>
                                                                <div style="padding:0px 0px 0px 30px" dir="ltr" align="left">
                                                                    <strong>หรือคัดลอกแล้ววางลิงก์นี้ลงบนเบราว์เซอร์ของคุณ:<br>[ `+ URL + `]</strong>
                                                                </div>
        
                                                            </td>
                                                        </tr>
        
                                                    </tbody>
                                                </table>
        
                                            </td>
                                        </tr>
        
                                        <tr>
                                            <td width="650">
                                                <table width="650" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td width="30"></td>
                                                            <td width="590" align="left" style="font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:12px">
                                                                <strong>
                                                                    <br>ด้วยความเคารพ,<br>
                                                                    <br>ทีมงาน FxHanuman<br>
                                                                    <br><br>
                                                                </strong>
                                                            </td>
                                                            <td width="30"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
        
                        <tr>
                            <td width="650" height="30" align="center" bgcolor="#000000" style="font-family:Arial,Helvetica,sans-serif;color:#fff;font-size:10px">
                                www.fxhanuman.com
                            </td>
                        </tr>
        
                    </tbody>
                </table>
            </td>
        </body>`
        };


        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err, info) {
                console.log("Verify -------------");
                //console.log(req.body);
                if (err) {
                    console.log("* Error");
                    console.log(err);

                    reject({
                        status: CONFIG.STATUS.FAIL,
                        err
                    });
                }
                else {
                    console.log("* Success");
                    console.log(info);

                    resolve({
                        status: CONFIG.STATUS.SUCCESS,
                        info
                    });
                }
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            reject({
                status: CONFIG.STATUS.REJECT,
                result: "reject Data"
            });
        });
    }


}
module.exports = {
    Main: async (req) => {
        try {
            var resp = {};
            if (req.params.typemail == "Verify") {
                console.log("Verify on");
                resp = await Register(req);
            }
            if (req.params.typemail == "ForgetPass") {
                resp = await Forgetpass(req);
            }
            // res.json(resp);
            return resp;
        } catch (ex) {
            // res.json(ex);
            return ex;
        }

    }
};