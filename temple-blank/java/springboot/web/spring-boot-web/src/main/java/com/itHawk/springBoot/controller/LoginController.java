package com.itHawk.springBoot.controller;

import com.itHawk.springBoot.model.User;
import com.itHawk.springBoot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;
//    @DeleteMapping
//    @PutMapping
//    @GetMapping

    //@RequestMapping(value = "/user/login",method = RequestMethod.POST)
    @PostMapping(value = "/user/login")
    /***
     * 根据用户登入名和密码进行登入
     */
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password,
                        Map<String, Object> map, HttpSession session) {

        User user = userService.selectByUserNameAndPassWord(username,password);
        if (!StringUtils.isEmpty(username) && user != null) {

            //登陆成功，防止表单重复提交，可以重定向到主页
            session.setAttribute("loginUser", username);
            return "redirect:/main.html";
        } else {
            //登陆失败

            map.put("msg", "用户名密码错误");
            return "login";
        }

    }
}
