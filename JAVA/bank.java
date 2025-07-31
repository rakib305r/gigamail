import java.text.ChoiceFormat;
import java.util.Scanner;

import javax.swing.SortOrder;

public class bank {
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {

    int choice;
    double balance = 0;
    Boolean isright = true;

    while (isright) {
      System.out.println("***************");
      System.out.println("BANKING PROGRAM");
      System.out.println("1. SHOW BALANCE");
      System.out.println("2. DEPOSITE");
      System.out.println("3. WITHDRAW");
      System.out.println("4. EXIT");
      System.out.println("***************");

      System.out.print("PLEASE CHOICE (1-4): ");
      choice = scanner.nextInt();

      switch (choice) {
        case 1 -> showbalance(balance);
        case 2 -> balance += deposite();
        case 3 -> balance -= withdraw(balance);
        case 4 -> isright = false;
        default -> System.out.println("INVALID CHOICE!!");
      }
    }
    System.out.println("***********************");
    System.out.println("Thanks! HAVE A GOOD DAY");
    System.out.println("***********************");
  }

  static void showbalance(double balance) {
    System.out.println("***************");
    System.out.printf("$%.2f\n", balance);
    System.out.println("***************");
  }

  static double deposite() {
    double amount;
    System.out.print("Enter an amount to be deposited: ");
    amount = scanner.nextDouble();

    if (amount < 0) {
      System.out.println("Amount Doesn't Negative!!");
      return 0;
    }
    else {
      return amount;
    }
  }
  static double withdraw(double balance){
    double how;
    System.out.print("Enter Withdraw Amount: ");
    how = scanner.nextDouble();

    if(how < 0 ){
      System.out.println("Negative doesn't Withdraw Amount!!");
      return 0;
    }
    else if(how > balance){
      System.out.println("You have Not This Amount!");
      return 0;
    }
    else{
      return how;
    }
  }

}
