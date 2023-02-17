package com.c823.consorcio.enums;

public enum Turn {

    DIA("DIA"), TARDE("TARDE"), NOCHE("NOCHE");

    private final String name ;

    Turn (String name) {
        this.name = name;
    }
    public Turn getName() {
        return Turn.valueOf(name);
    }

}
