import java.util.Scanner;
public class Bill{
  public static void main(String[]args){
    Scanner sc = new Scanner(System.in);
    int u_bill;
    double result = 0;

    System.out.print("Enter your Unit:");
    u_bill = sc.nextInt();

    if (u_bill < 100){
      result = 1.20;
    }
    else if (u_bill == 100) {
      result = 2.0;
      
    } else {
      result = 10.0;
    }
    System.out.println("your bill is:"+ result);
  }
}