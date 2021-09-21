package io.admission.demo1.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "contacts")
public class Contact {
    @Id
    String id;
    String studName;
    String gender;
    String dob;
    String divistion;
    String class_s;

    public Contact() {
    }

    public Contact(String studName, String gender, String dob, String divistion, String class_s) {
        this.studName = studName;
        this.gender = gender;
        this.dob = dob;
        this.divistion = divistion;
        this.class_s = class_s;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return studName;
    }

    public void setName(String name) {
        this.studName = name;
    }

    public String getgender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getdob() {
        return dob;
    }

    public void setdob(String dob) {
        this.dob = dob;
    }

    public String getdivistion() {
        return divistion;
    }

    public void setdivistion(String divistion) {
        this.divistion = divistion;
    }

    public String getclass_s() {
        return class_s;
    }

    public void setclass_s(String class_s) {
        this.class_s = class_s;
    }
}

