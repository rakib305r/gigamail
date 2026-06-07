import java.util.Scanner;

public class switch_system {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your score: ");
        int mark = scanner.nextInt();
        String grade;
        switch (mark/10) {
            case 10: 
            case 9:  
            case 8:  
                grade = "A+";
                break;
            case 7:  
                grade = "A";
                break;
            case 6:  
                grade = "B";
                break;
            case 5:  
                grade = "C";
                break;
            case 4:  
                grade = "D"; 
                break;
            default: 
                grade = "Fail";
                break;
        }

        System.out.println("Grade: " + grade);
    }
}