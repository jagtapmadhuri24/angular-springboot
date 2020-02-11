package com.angular.springboot.jwt;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
  /*  {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU4MTkzNTExMiwiaWF0IjoxNTgxMzMwMzEyfQ.j5eE5rGL7EKGzzlxLVmfvz8-t2TiGtf5VfDMUIvKIFWDzP27rTFjoH8Z8-O7gshGWGrhCkIdbtC8eqIYoWuCrw"
    }*/

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

