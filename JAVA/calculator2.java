import java.util.Scanner;
public class calculator2 {
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);
    
    double a ;
    double b ;
    char operator;
    double result = 0;
    boolean invalidoperator = true;

    System.out.print("Enter Number: ");
    a = scanner.nextDouble();

    System.out.print("choice an operator! (+,-,*,/,^): ");
    operator = scanner.next().charAt(0);

    System.out.print("Enter your second value: ");
    b = scanner.nextDouble();

    switch (operator) {
      case '+' -> result = a + b;
      case '-' -> result = a - b ;
      case '*' -> result = a * b ;
      case '/' -> {if(b == 0){
        System.out.print("Cannot devide by '0' !! ");
        invalidoperator = false;
      }
    else{
      result = a / b ;
    }}
      case '^' -> result = Math.pow(a, b) ;
      default -> {
        System.out.println("Invalid Operator!!");
        invalidoperator = false;
      }
    }

    if(invalidoperator){
      System.out.printf("result is: %.2f ", result);
    }
    
    scanner.close();
  }
}
