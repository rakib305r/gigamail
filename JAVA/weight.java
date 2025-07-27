import java.util.Scanner;
public class weight {
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);
    
    int choice;
    double weight;
    double newweight;

    System.out.println("1. convert lbs to KG.");
    System.out.println("2. convert kg to lbs.");

    System.out.print("you chose an option: ");
    choice = scanner.nextInt();

    if(choice == 1){
      System.out.print("Please enter lbs: ");
      weight = scanner.nextDouble();

      newweight = weight*0.453592;
      System.out.printf("This is- %.2fKG", newweight);

    }
    else if(choice == 2){
      System.out.print("Please enter KG: ");
      weight = scanner.nextDouble();

      newweight = weight*2.20462;
      System.out.printf("Tis is- %.2flbs", newweight);
    }
    else{
      System.out.print("invalid number!! ");
    }
    scanner.close();
  }  
}
