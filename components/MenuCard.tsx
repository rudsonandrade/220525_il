import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useState, ReactNode } from 'react';

interface MenuItem {
  title: string;
  url?: string;
}

type MenuItemType = string | MenuItem;

interface MenuCardProps {
  title: string;
  icon: ReactNode;
  items: MenuItemType[];
}

export function MenuCard({ title, icon, items }: MenuCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleItemPress = (item: MenuItemType) => {
    if (typeof item === 'object' && item.url) {
      Linking.openURL(item.url);
    }
  };

  const renderMenuItem = (item: MenuItemType) => {
    const itemTitle = typeof item === 'string' ? item : item.title;
    const hasUrl = typeof item === 'object' && item.url;

    return (
      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => handleItemPress(item)}
        disabled={!hasUrl}
      >
        <Text style={[styles.menuItemText, hasUrl && styles.menuItemLinkText]}>
          {itemTitle}
        </Text>
        <ChevronRight size={16} color="#0066CC" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        style={styles.titleContainer}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <View style={styles.titleLeft}>
          <View style={styles.iconContainer}>
            {icon}
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ChevronRight 
          size={20} 
          color="#666666" 
          style={{ 
            transform: [{ rotate: expanded ? '90deg' : '0deg' }] 
          }} 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.menuItems}>
          {items.map((item, index) => (
            <View key={index}>
              {renderMenuItem(item)}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6F0F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  menuItems: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  menuItemText: {
    fontSize: 14,
    color: '#666666',
  },
  menuItemLinkText: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
});