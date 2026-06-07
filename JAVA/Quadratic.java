import java.util.Scanner;

public class Quadratic {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter The value of a: ");
    double a = scanner.nextDouble();
    System.out.print("Enter The value of b: ");
    double b = scanner.nextDouble();
    System.out.print("Enter The value of c: ");
    double c = scanner.nextDouble();

    double x = ((b * b) - 4 * a * c);
    if (x > 0) {
      double root1 = (-b + Math.sqrt(x)) / (2 * a);
      double root2 = (-b - Math.sqrt(x)) / (2 * a);
      System.out.println("The roots are: " + root1 + " and " + root2);
    } else if (x == 0) {
      double root = -b / (2 * a);
      System.out.println("The root is:" + root);
    } else {
      System.out.println("The equation has no real roots.");
    }
  }
}