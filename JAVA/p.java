import java.util.Scanner;

public class p {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a,b,sum,sun;
    System.out.println("Enter your number:");
    a = sc.nextInt();
    System.out.println("Enter your number:");
    b = sc.nextInt();
    sum = a + b;
    sun = (sum %2 == 0)? true: false;
    }
  }