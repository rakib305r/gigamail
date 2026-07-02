import javax.swing.*;
import java.awt.*;

public class gajal {

    static String[][] lyrics = {
            {"Hamd-o-Sana Rabb-e-Zul-Jalal Ki", "CYAN"},
            {"", "WHITE"},
            {"Kardo Karam Maula, Kardo Karam", "YELLOW"},
            {"Hum Pe Karam Maula, Hum Pe Karam", "BLUE"},
            {"Kardo Karam Maula, Kardo Karam", "YELLOW"},
            {"Hum Pe Karam Allah, Hum Pe Karam", "BLUE"},
            {"", "WHITE"},
            {"Bikhre Huye Sharmsaar Hain Hum", "MAGENTA"},
            {"Rehmat Ke Talabgaar Hain Hum", "RED"},
            {"Wasta Nabi Ka Maula Rakh Lo Bharam", "CYAN"},
            {"", "WHITE"},
            {"Kardo Karam Maula, Kardo Karam", "YELLOW"},
            {"Hum Pe Karam Maula, Hum Pe Karam", "BLUE"},
            {"Kardo Karam Allah, Kardo Karam", "GREEN"},
            {"Hum Pe Karam Maula, Hum Pe Karam", "MAGENTA"}
    };

    static int index = 0;

    public static void main(String[] args) {

        JFrame frame = new JFrame("🕌 Kardo Karam");
        frame.setSize(800, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setBackground(new Color(15, 23, 42)); // Dark Blue
        panel.setLayout(new BorderLayout());

        JLabel title = new JLabel("🕌 Kardo Karam", SwingConstants.CENTER);
        title.setFont(new Font("Serif", Font.BOLD, 30));
        title.setForeground(Color.ORANGE);

        JLabel lyric = new JLabel("", SwingConstants.CENTER);
        lyric.setFont(new Font("Arial", Font.BOLD, 28));

        panel.add(title, BorderLayout.NORTH);
        panel.add(lyric, BorderLayout.CENTER);

        frame.add(panel);
        frame.setVisible(true);

        Timer timer = new Timer(2500, e -> {

            lyric.setText(lyrics[index][0]);

            switch (lyrics[index][1]) {
                case "GREEN":
                    lyric.setForeground(Color.GREEN);
                    break;
                case "CYAN":
                    lyric.setForeground(Color.CYAN);
                    break;
                case "YELLOW":
                    lyric.setForeground(Color.YELLOW);
                    break;
                case "BLUE":
                    lyric.setForeground(Color.BLUE);
                    break;
                case "MAGENTA":
                    lyric.setForeground(Color.MAGENTA);
                    break;
                case "RED":
                    lyric.setForeground(Color.RED);
                    break;
                default:
                    lyric.setForeground(Color.WHITE);
            }

            index++;

            if (index == lyrics.length) {
                index = 0;
            }

        });

        timer.start();
    }
}