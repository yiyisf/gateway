package com.yiyi.app.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by liuzhe on 2019/6/7.
 */
@lombok.Data
@lombok.AllArgsConstructor
@lombok.NoArgsConstructor
@Entity
class Yiyi {

    public Yiyi(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
