import java.util.Scanner;

public class Big_number {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a, b, c;
    System.out.print("Enter your 1st NUmber:");
    a = sc.nextInt();
    System.out.print("Enter your 2nd NUmber:");
    b = sc.nextInt();
    System.out.print("Enter your 3rd NUmber:");
    c = sc.nextInt();

    if (a > b && a > c) {
      System.out.println("A is your Big Number: " + a);
    } else if (b > c) {
      System.out.println("B is your Big Number: " + b);
    } else {
      System.out.println("C is your Big Number: " + c);
    }
  }
}
