package br.com.api.grow.security;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticatedFilterJWT extends OncePerRequestFilter {

    private final JWTHelper jwtHelper;

    public AuthenticatedFilterJWT(JWTHelper jwtHelper) {
        this.jwtHelper = jwtHelper;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String token = request.getHeader("Authorization");

        if(request.getRequestURI().contains("/user/session") || request.getMethod().equals("OPTIONS")){
           filterChain.doFilter(request, response);
           return;
        }

        if(token == null || !token.startsWith("Bearer")){
            throw new ServletException("Token is invalid!");
        }

        token = token.substring(7);


        if(!jwtHelper.tokenValid(token)){

            throw  new ServletException("Token expired or invalid!");
        }

        filterChain.doFilter(request, response);

    }


}
