import java.util.Scanner;
public class logicOPT{
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    String username; 
    

    System.out.print("Enter your name: ");
    username = scanner.nextLine();

    if(username.length()<4 || username.length()>12 ){
      System.out.println("You must entered (4-12) characters");
    }
    else if(username.contains(" ") || username.contains("_")){
      System.out.println("username must not contain space or underline!");
    }
    else{
      System.out.println("HELLO "+username);
    }

    scanner.close();

  }
}