import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header / Hero Section */}
        <View style={styles.heroCard}>
          <Text style={styles.greeting}>Hi, I'm</Text>
          <Text style={styles.name}>Mohammed Ibaad</Text>
          <Text style={styles.tagline}>
            Web Developer · Problem Solver · CS Enthusiast
          </Text>
        </View>

        {/* About Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionText}>
            I'm a passionate developer with a strong foundation in web
            development and computer science fundamentals. I enjoy building
            clean, user-friendly experiences and love understanding how things
            work under the hood — from data structures and algorithms to
            operating systems and system design.
          </Text>
        </View>

        {/* Web Development Skills */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Web Development</Text>
          <Text style={styles.sectionSubtitle}>Technologies I work with:</Text>
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>HTML</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>CSS</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>JavaScript</Text>
            </View>
          </View>
          <Text style={styles.sectionTextSmall}>
            Comfortable building responsive UIs, structuring pages, and styling
            modern web apps.
          </Text>
        </View>

        {/* Programming Languages */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Programming Languages</Text>
          <View style={styles.chipRowWrap}>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Java</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Python</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>C</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>C++</Text>
            </View>
          </View>
        </View>

        {/* CS Fundamentals */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Computer Science</Text>
          <Text style={styles.sectionSubtitle}>What I know:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Data Structures & Algorithms (DSA)</Text>
            <Text style={styles.listItem}>• Operating System fundamentals (OS)</Text>
            <Text style={styles.listItem}>• Basic System Design concepts</Text>
          </View>
          <Text style={styles.sectionTextSmall}>
            I focus on writing efficient code and understanding the trade-offs
            behind different design decisions.
          </Text>
        </View>

        {/* Footer / Contact Hint */}
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Let’s Build Something</Text>
          <Text style={styles.footerText}>
            Open to opportunities, collaborations, and exciting projects.
          </Text>
          <Text style={styles.footerEmail}>
            ✉️  youremail@example.com
          </Text>
          <Text style={styles.footerNote}>
            (Replace with your real email or contact info)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617', // dark navy
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  heroCard: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#1f2937',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  greeting: {
    color: '#9ca3af',
    fontSize: 14,
    marginBottom: 4,
  },
  name: {
    color: '#e5e7eb',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  tagline: {
    color: '#9ca3af',
    fontSize: 14,
  },
  sectionCard: {
    marginBottom: 20,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1f2937',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  sectionTitle: {
    color: '#e5e7eb',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#9ca3af',
    fontSize: 13,
    marginBottom: 10,
  },
  sectionText: {
    color: '#d1d5db',
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTextSmall: {
    color: '#9ca3af',
    fontSize: 13,
    marginTop: 10,
    lineHeight: 18,
  },
  chipRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  chipRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#2563eb',
  },
  chipText: {
    color: '#dbeafe',
    fontSize: 12,
    fontWeight: '500',
  },
  list: {
    marginTop: 4,
  },
  listItem: {
    color: '#d1d5db',
    fontSize: 14,
    marginBottom: 4,
  },
  footerCard: {
    marginTop: 10,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1f2937',
    alignItems: 'flex-start',
  },
  footerTitle: {
    color: '#e5e7eb',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 13,
    marginBottom: 8,
  },
  footerEmail: {
    color: '#bfdbfe',
    fontSize: 14,
    fontWeight: '500',
  },
  footerNote: {
    color: '#6b7280',
    fontSize: 11,
    marginTop: 4,
  },
});
