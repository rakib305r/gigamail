import java.util.Scanner;
public class Square{
  public static void main(String[]args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your number:");
    int n = sc.nextInt();
    int sum = 0;
    for(int i= 0; i <=n; i++){
      sum = sum +(i*i);
      System.out.println("The sum is:"+sum);
    }
  }
}