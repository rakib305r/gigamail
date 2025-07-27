import java.util.Scanner;
public class temp {
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

    double temp;
    double newtemp;
    String unit;

    System.out.print("Enter Tepmarature: ");
    temp = scanner.nextDouble();

    System.out.print("Convert to Cel or Far? (C or F): ");
    unit = scanner.next().toUpperCase();

    newtemp = (unit.equalsIgnoreCase("C"))? (temp-32)* 5/9 : (temp * 5/9)+ 32;
    System.out.printf("%.2f°%s", newtemp, unit );

    scanner.close();
  }
}
