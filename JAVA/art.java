import java.util.Random;
import java.util.Scanner;

public class art {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    Random random = new Random();
    int numofdice;
    int total = 0;

    System.out.print("Enter Number of dice: ");
    numofdice = sc.nextInt();

    if (numofdice > 0) {
      for (int i = 0; i < numofdice; i++) {
        int roll = random.nextInt(1, 6);
        System.out.println("You Rolled: " + roll);
        printDice(roll);
        total += roll;
      }
      System.out.println("TOTAL: " + total);
    } else {
      System.out.println("# of dice must be gratter than 0 !! ");
    }

    sc.close();
  }

  static void printDice(int roll) {

    String dice1 = """
           ---------
          |         |
          |         |
          |    ●    |
          |         |
          |         |
           ---------

        """;
    String dice2 = """
           ---------
          |         |
          | ●       |
          |         |
          |       ● |
          |         |
           ---------

        """;
    String dice3 = """
           ---------
          |         |
          | ●       |
          |    ●    |
          |       ● |
          |         |
           ---------

        """;
    String dice4 = """
           ---------
          |         |
          | ●     ● |
          |         |
          | ●     ● |
          |         |
           ---------

        """;
    String dice5 = """
           ---------
          |         |
          | ●     ● |
          |    ●    |
          | ●     ● |
          |         |
           ---------

        """;
    String dice6 = """
           ---------
          |         |
          | ●     ● |
          | ●     ● |
          | ●     ● |
          |         |
           ---------

        """;
    switch (roll) {
      case 1 -> System.out.println(dice1);
      case 2 -> System.out.println(dice2);
      case 3 -> System.out.println(dice3);
      case 4 -> System.out.println(dice4);
      case 5 -> System.out.println(dice5);
      case 6 -> System.out.println(dice6);
      default -> System.out.println("INVALID ROLL!!");
    }
  }
}