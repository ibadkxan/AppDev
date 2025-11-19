import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.hello}>Hi, I’m</Text>
          <Text style={styles.name}>Md Ibaad</Text>
          <Text style={styles.tagline}>
            Information Science Engineering student • Web Developer • Cyber
            Security & DSA Learner • Aspiring Investment Banking Professional
          </Text>
        </View>

        {/* About Me */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Me</Text>
          <Text style={styles.cardText}>
            I’m pursuing Information Science & Engineering and actively building
            skills in full-stack web development, coding, cyber security, data
            structures & algorithms, and system-level concepts.
          </Text>
          <Text style={styles.cardText}>
            I enjoy connecting tech with real-world problem solving and I’m also
            exploring the fundamentals of investment banking as a long-term
            career interest.
          </Text>
        </View>

        {/* Skills Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What I Know</Text>

          <Text style={styles.sectionLabel}>Web Development</Text>
          <View style={styles.infoRow}>
            <FontAwesome name="globe" size={18} style={styles.icon} />
            <Text style={styles.infoText}>
              HTML, CSS, JavaScript, React, Node.js (MERN-style stack learning)
            </Text>
          </View>

          <Text style={styles.sectionLabel}>Programming Languages</Text>
          <View style={styles.infoRow}>
            <FontAwesome name="terminal" size={18} style={styles.icon} />
            <Text style={styles.infoText}>
              Java, Python, C++, plus core programming foundations
            </Text>
          </View>

          <Text style={styles.sectionLabel}>Cyber Security</Text>
          <View style={styles.infoRow}>
            <FontAwesome name="shield" size={18} style={styles.icon} />
            <Text style={styles.infoText}>
              Learning cyber security concepts, secure coding basics, and
              practical scenarios.
            </Text>
          </View>

          <Text style={styles.sectionLabel}>DSA & System Concepts</Text>
          <View style={styles.infoRow}>
            <FontAwesome name="cogs" size={18} style={styles.icon} />
            <Text style={styles.infoText}>
              Actively practicing DSA and exploring system-level topics like OS,
              memory, and performance.
            </Text>
          </View>
        </View>

        {/* What I'm Working On */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Currently Focusing On</Text>
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>DSA Practice</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>MERN-Style Web Dev</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>React & React Native</Text>
            </View>
          </View>
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Cyber Security Basics</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>System-Level Concepts</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Investment Banking Fundamentals</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          Check the Projects tab to see what I’ve been working on, and use
          Contact if you’d like to reach out.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617", // dark navy
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  hello: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 4,
  },
  name: {
    color: "#e5e7eb",
    fontSize: 32,
    fontWeight: "700",
  },
  tagline: {
    color: "#9ca3af",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
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
    color: "#9ca3af",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  sectionLabel: {
    color: "#cbd5f5",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 2,
    fontWeight: "500",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  icon: {
    marginRight: 8,
    color: "#60a5fa",
  },
  infoText: {
    color: "#d1d5db",
    fontSize: 14,
    flex: 1,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#1f2937",
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#020617",
  },
  chipText: {
    color: "#cbd5f5",
    fontSize: 12,
  },
  footerText: {
    color: "#6b7280",
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
});