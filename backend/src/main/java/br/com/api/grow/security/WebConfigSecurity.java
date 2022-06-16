package br.com.api.grow.security;

import br.com.api.grow.model.user.service.UserService;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class WebConfigSecurity extends WebSecurityConfigurerAdapter {

    private final UserService userService;
    private final AuthenticatedFilterJWT authenticatedFilterJWT;

    public WebConfigSecurity(UserService userService, AuthenticatedFilterJWT authenticatedFilterJWT) {
        this.userService = userService;
        this.authenticatedFilterJWT = authenticatedFilterJWT;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {



        http.csrf().disable()
                .authorizeHttpRequests()
                .antMatchers("/user/**").permitAll()
                .and()
                .httpBasic();

        http.addFilterBefore(authenticatedFilterJWT, UsernamePasswordAuthenticationFilter.class);
    }



//        http.authorizeRequests()
//                .antMatchers(HttpMethod.POST, "/user/**").permitAll()
//                .anyRequest().authenticated()
//                .and().csrf().disable()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .addFilterBefore(authenticatedFilterJWT, UsernamePasswordAuthenticationFilter.class);
//
//


}


