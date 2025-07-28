import java.util.Scanner;
public class whileloop{
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

    String name;
    System.out.println("Enter your name: ");
    name = scanner.nextLine();

    while(name.isEmpty()){
      System.out.println("Empty please try again!: ");
      name = scanner.nextLine();
    }
    System.out.println("HELLO "+name);
    scanner.close();
  }
}