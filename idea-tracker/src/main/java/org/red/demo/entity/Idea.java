package org.red.demo.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.*;
import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="ideas")
public class Idea {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    @JsonbDateFormat(value = "yyyy-MM-dd")
    private LocalDate submitDate;
    @JsonbDateFormat(value = "yyyy-MM-dd")
    private LocalDate  completionTargetDate;
}
