import java.util.Scanner;
public class triangle {
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

    double a;
    double b;
    double c;
    double s;
    double area;

    System.out.print("Enter a value of A: ");
    a = scanner.nextDouble();
    
    System.out.print("Enter a value of B: ");
    b = scanner.nextDouble();
    
    System.out.print("Enter a value of C: ");
    c = scanner.nextDouble();
    
    s = (a+b+c)/2;

    area = Math.sqrt((s-a)*(s-b)*(s-c));
    System.out.println("Triangle Area is:"+ area);


    scanner.close();
  }
}
