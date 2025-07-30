import java.util.Scanner;

public class jala {
  public static void main(String[] args) {

    String name = "MARUF";
    int age = 19;

    wish(age, name);
    wish(age, name);
    wish(age, name);

  }
  static void wish(int age, String name) {
    System.out.println("HAPPY BIRTHDAY!");
    System.out.printf("HAPPY BIRTHDAY %s\n", name);
    System.out.printf("YOU ARE NOW %d YEARS OLD\n", age);
    System.out.println();
  }
}