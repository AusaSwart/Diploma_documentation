package com.epa.epadiplom.entity.authentication;

import com.epa.epadiplom.entity.employeeAttributes.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EditRequest {

    private String firstName;
    private String middleName;
    private String lastName;
    private Date birthD;
    private Role role;
    private long workNumber;
    private long personalNumber;
    private String locationStreet;
    private String cabinetOffice;

}
