import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PROJECTS = [
  {
    title: "Voice Command Game for Blind Users",
    stack: "Voice interaction • Accessibility • Game logic",
    status: "Prototype Completed",
    description:
      "A game designed for visually impaired users where the player can interact and control actions using voice commands. The system responds with audio feedback so the entire experience is accessible without needing a screen.",
  },
  {
    title: "Personal Portfolio & Profile",
    stack: "HTML • CSS • JavaScript • React / React Native",
    status: "In Progress",
    description:
      "A personal portfolio to showcase my skills, projects, education, and contact details with a clean, minimal, dark-themed UI.",
  },
  {
    title: "DSA Practice & Problem Bank",
    stack: "Java • C++ • Python",
    status: "Ongoing",
    description:
      "A collection of data structures and algorithms problems and solutions to strengthen core logic building, time complexity understanding, and interview-style thinking.",
  },
  {
    title: "Systems & CS Fundamentals Notes",
    stack: "OS • Memory • Basic System Concepts",
    status: "Ongoing",
    description:
      "Structured notes and small experiments to understand system-level concepts like operating systems, memory management, processes, and how things work behind the scenes.",
  },
];

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Projects & Work</Text>
        <Text style={styles.subtitle}>
          A mix of built projects, ongoing work, and things I’m exploring to
          improve my skills.
        </Text>

        {PROJECTS.map((project, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <View style={styles.statusPill}>
                <Text style={styles.statusText}>{project.status}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <FontAwesome name="code" size={16} style={styles.icon} />
              <Text style={styles.stackText}>{project.stack}</Text>
            </View>

            <Text style={styles.description}>{project.description}</Text>
          </View>
        ))}

        <Text style={styles.footerText}>
          I’m continuously improving these and planning new projects that combine
          web development, problem solving, and real-world impact.
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
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  cardTitle: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    paddingRight: 6,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  statusText: {
    color: "#93c5fd",
    fontSize: 11,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    marginTop: 2,
  },
  icon: {
    marginRight: 8,
    color: "#60a5fa",
  },
  stackText: {
    color: "#9ca3af",
    fontSize: 13,
  },
  description: {
    color: "#d1d5db",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },
  footerText: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
});