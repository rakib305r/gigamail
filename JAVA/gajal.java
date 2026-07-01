public class gajal {

    public static void main(String[] args) throws InterruptedException {

        String[] lyrics = {

            "Bismillah",
            "",
            "Hamd-o-Sana Rabb-e-Zul-Jalal Ki",
            "",
            "Kardo Karam Maula, Kardo Karam",
            "Hum Pe Karam Maula, Hum Pe Karam",
            "Kardo Karam Maula, Kardo Karam",
            "Hum Pe Karam Allah, Hum Pe Karam",
            "",
            "Bikhre Huye Sharmsaar Hain Hum",
            "Rehmat Ke Talabgaar Hain Hum",
            "Wasta Nabi Ka Maula Rakh Lo Bharam",
            "",
            "Kardo Karam Maula, Kardo Karam",
            "Hum Pe Karam Maula, Hum Pe Karam",
            "Kardo Karam Allah, Kardo Karam",
            "Hum Pe Karam Maula, Hum Pe Karam",

            // Continue adding all your lyrics here...
        };

        int delay = 2500; // 2.5 seconds

        for (String line : lyrics) {
            System.out.println(line);
            Thread.sleep(delay);
        }

        System.out.println("\n--- End of Lyrics ---");
    }
}