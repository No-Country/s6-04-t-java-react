package com.c823.consorcio.enums;

public enum Amenities {
  SALON ("SALON"), PISCINA("PISCINA"), PARRILLA("PARRILLA"), GYM("GYM"), TENIS("TENIS");

  private final String name;

  Amenities(String name) { this.name = name;}

  public Amenities getName(){

    return Amenities.valueOf(name);
  }
}
