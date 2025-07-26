import java.util.Scanner;
public class multification{
  public static void main(String[] args) {
    
    Scanner scan = new Scanner(System.in);

    double width = 0;
    double height = 0;
    double area = 0;

    System.out.print("Enter Your Width: ");
    width = scan.nextDouble();

    System.out.print("Enter your Height: ");
    height = scan.nextDouble();
    
    area = width * height;
    System.out.print("Your Area is: " + area);

    scan.close();
  }
}
