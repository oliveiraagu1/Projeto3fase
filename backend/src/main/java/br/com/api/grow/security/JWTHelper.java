package br.com.api.grow.security;

import br.com.api.grow.model.user.entity.UserModel;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTHelper {

    @Value("${jtw.passwordSecret}")
    private String tokenSecret;

    @Value("${jwt.time}")
    private Long timeLife;


    public Boolean tokenValid(String token){
        if(isTokenExpired(token)){
            return false;
        }
        return true;
    }

    public Boolean isTokenExpired(String token){
        Date dateValid = getPayLoadToken(token).getExpiration();
        return dateValid.before(new Date());
    }

    private Claims getPayLoadToken(String token){
        return Jwts.parser()
                .setSigningKey(tokenSecret)
                .parseClaimsJws(token).getBody();
    }


    public String generationToken(UserModel user){


        Map<String, Object> claims = new HashMap<>();
        claims.put("name", user.getName());

        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + timeLife))
                .signWith(SignatureAlgorithm.HS512, tokenSecret)
                .compact();
    }
}
