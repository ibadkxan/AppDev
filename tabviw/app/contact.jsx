import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// 🔁 Replace these with your actual links & email:
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammed-ibaad-16a975314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
const GITHUB_URL = "https://github.com/ibadkxan";
const EMAIL = "mdibaad9@gmail.com";

export default function ContactScreen() {
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this link right now.");
      }
    } catch (e) {
      Alert.alert("Error", "Something went wrong while opening the link.");
    }
  };

  const sendEmail = () => {
    const mailto = `mailto:${EMAIL}`;
    openLink(mailto);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Let’s Connect</Text>
        <Text style={styles.subtitle}>
          Reach out for projects, collaborations, learning opportunities, or
          just a good conversation about tech and careers.
        </Text>

        {/* Intro Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Me</Text>
          <Text style={styles.cardText}>
            I’m an Information Science Engineering student exploring web
            development, React / React Native, cyber security, DSA, and
            system-level concepts.
          </Text>
          <Text style={styles.cardText}>
            I like building useful things, learning deeply, and I’m also
            interested in understanding how the world of finance and investment
            banking works from a technical and analytical point of view.
          </Text>
          <Text style={styles.cardText}>
            Open to internships, remote opportunities, student projects, and
            networking with people from tech and finance domains.
          </Text>
        </View>

        {/* Contact Buttons */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reach Me On</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openLink(LINKEDIN_URL)}
          >
            <FontAwesome
              name="linkedin-square"
              size={20}
              style={styles.buttonIcon}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.buttonTitle}>LinkedIn</Text>
              <Text style={styles.buttonSubtitle}>
                Connect professionally, see my profile and journey.
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={14}
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openLink(GITHUB_URL)}
          >
            <FontAwesome name="github" size={20} style={styles.buttonIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.buttonTitle}>GitHub</Text>
              <Text style={styles.buttonSubtitle}>
                Explore my code, practice work, and experiments.
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={14}
              style={styles.chevron}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={sendEmail}>
            <FontAwesome name="envelope" size={20} style={styles.buttonIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.buttonTitle}>Email</Text>
              <Text style={styles.buttonSubtitle}>
                Send me a detailed message for collaboration or queries.
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={14}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Don’t forget to update the LinkedIn, GitHub, and email values in this
          file with your actual details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 32,
  },
  title: {
    color: "#e5e7eb",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#0b1220",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardTitle: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    color: "#d1d5db",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 8,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  buttonIcon: {
    marginRight: 10,
    color: "#60a5fa",
  },
  buttonTitle: {
    color: "#e5e7eb",
    fontSize: 15,
    fontWeight: "500",
  },
  buttonSubtitle: {
    color: "#9ca3af",
    fontSize: 12,
  },
  chevron: {
    marginLeft: 8,
    color: "#4b5563",
  },
  footerText: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});