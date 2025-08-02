import javax.swing.*;
import java.awt.*;

public class TelephoneKeypadGUI {
    public static void main(String[] args) {
        JFrame frame = new JFrame("hoilo ekta");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 400);
        frame.setLayout(new GridLayout(4, 3, 10, 10));
        frame.setLocationRelativeTo(null); // center screen

        String[] keys = {
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "*", "0", "#"
        };

        Color coffeeColor = new Color(70, 80, 90); // light coffee

        for (String key : keys) {
            JButton button = new JButton(key);
            button.setFont(new Font("Arial", Font.BOLD, 24));
            button.setBackground(coffeeColor);
            button.setForeground(Color.BLACK);
            button.setFocusPainted(false);
            button.setBorderPainted(false);
            frame.add(button);
        }

        frame.getContentPane().setBackground(new Color(10, 22, 17)); // wheat bg
        frame.setVisible(true);
    }
}
