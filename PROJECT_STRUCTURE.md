# TypeScript Project Structure - Real Estate Map

## 📁 البنية التنظيمية

```
src/
├── models/                     # TypeScript Types & Interfaces
│   ├── types.ts               # جميع الأنواع والواجهات
│   └── index.ts               # تصدير الأنواع
│
├── hooks/                      # Custom React Hooks (TypeScript)
│   ├── useMapState.ts         # إدارة حالة الخريطة والعقارات
│   ├── useFilterState.ts      # إدارة حالة الفلاتر
│   ├── useSidebarState.ts     # إدارة حالة القوائم الجانبية
│   └── index.ts               # تصدير جميع الـ hooks
│
├── components/
│   ├── LeftSidebar/           # مكونات القائمة اليسرى (TypeScript)
│   │   ├── LeftSidebar.tsx    # المكون الرئيسي
│   │   ├── PropertyTypeToggle.tsx  # زر التبديل بين بيع/إيجار
│   │   ├── LocationSelectors.tsx   # اختيار المدينة والحي
│   │   ├── RangeFilter.tsx         # فلتر النطاق (السعر/المساحة)
│   │   ├── AdvancedFilters.tsx     # الفلاتر المتقدمة
│   │   └── index.ts
│   │
│   ├── RightSidebar/          # مكونات القائمة اليمنى (TypeScript)
│   │   ├── RightSidebar.tsx   # المكون الرئيسي
│   │   ├── NavigationMenu.tsx # قائمة التنقل
│   │   ├── SidebarFooter.tsx  # تذييل القائمة
│   │   └── index.ts
│   │
│   ├── MapView/               # مكونات الخريطة (TypeScript)
│   │   ├── MapView.tsx        # عرض الخريطة الرئيسي
│   │   ├── PropertyMarker.tsx # علامات العقارات
│   │   └── index.ts
│   │
│   ├── Map.tsx                # المكون الرئيسي للخريطة
│   └── Map.css                # التنسيقات
│
├── App.tsx
├── main.tsx
├── vite-env.d.ts             # تعريفات البيئة
└── index.css
```

## 🎯 الأنواع والواجهات (Types & Interfaces)

### Property
```typescript
interface Property {
  id: number;
  longitude: number;
  latitude: number;
  price: string;
  type: 'villa' | 'apartment' | 'land' | 'commercial';
}
```

### ViewState
```typescript
interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}
```

### FilterState
```typescript
interface FilterState {
  propertyType: 'بيع' | 'إيجار';
  setPropertyType: (type: 'بيع' | 'إيجار') => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  areaRange: [number, number];
  setAreaRange: (range: [number, number]) => void;
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (show: boolean) => void;
}
```

### MenuItem
```typescript
interface MenuItem {
  label: string;
  icon: string;
  href?: string;
}
```

## 📦 Custom Hooks

### `useMapState(): MapState`
إدارة حالة الخريطة والعقارات مع Type Safety

### `useFilterState(): FilterState`
إدارة جميع حالات الفلاتر مع Type Safety

### `useSidebarState(): SidebarState`
إدارة حالة القوائم الجانبية مع Type Safety

## ✨ مميزات TypeScript

### Type Safety
- ✅ التحقق من الأنواع في وقت الكتابة
- ✅ IntelliSense محسّن
- ✅ اكتشاف الأخطاء قبل التشغيل
- ✅ Refactoring آمن

### Best Practices
- ✅ Strict Mode مفعّل
- ✅ واجهات واضحة لجميع المكونات
- ✅ أنواع مخصصة للبيانات
- ✅ Type inference حيثما أمكن

## 🚀 كيفية الاستخدام

### إضافة نوع جديد
```typescript
// في src/models/types.ts
export interface NewType {
  id: number;
  name: string;
}
```

### استخدام الأنواع في المكونات
```typescript
import type { Property } from '../models';

interface MyComponentProps {
  property: Property;
}

const MyComponent: React.FC<MyComponentProps> = ({ property }) => {
  // ...
};
```

### استخدام Custom Hooks
```typescript
const mapState = useMapState(); // Type: MapState
const filterState = useFilterState(); // Type: FilterState
```

## 📝 ملفات التكوين

### tsconfig.json
- Strict mode enabled
- React JSX support
- Modern ES2020 target
- Bundler module resolution

### vite-env.d.ts
- تعريفات متغيرات البيئة
- دعم VITE_MAPBOX_TOKEN

## 🎨 التخصيص

جميع الأنواع قابلة للتوسيع والتخصيص حسب احتياجات المشروع.

## 📊 الإحصائيات

- **TypeScript Files**: 20+
- **Type Definitions**: 8+
- **Interfaces**: 6+
- **Custom Hooks**: 3
- **Components**: 13
- **100% Type Coverage**
