interface ProjectStructureProps {
  className?: string;
}

export default function ProjectStructure({ className = '' }: ProjectStructureProps) {
  return (
    <div className={`rounded-lg bg-gray-50 dark:bg-gray-800 p-6 font-mono text-sm ${className}`}>
      <div className="space-y-1 text-gray-700 dark:text-gray-300">
        <div className="font-semibold text-gray-900 dark:text-white">flutter_game/</div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900 dark:text-white">lib/</div>
          <div className="ml-4 space-y-1">
            <div className="text-blue-600 dark:text-blue-400">├── main.dart</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── App entry point</div>
            <div className="font-semibold text-gray-900 dark:text-white">├── screens/</div>
            <div className="ml-4 space-y-1">
              <div className="text-blue-600 dark:text-blue-400">│   ├── main_menu_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── Main menu with play button</div>
              <div className="text-blue-600 dark:text-blue-400">│   ├── game_setup_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── Difficulty and map selection</div>
              <div className="text-blue-600 dark:text-blue-400">│   ├── game_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── Game screen</div>
              <div className="text-blue-600 dark:text-blue-400">│   ├── game_over_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── Game over screen</div>
              <div className="text-blue-600 dark:text-blue-400">│   ├── high_scores_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── High scores display</div>
              <div className="text-blue-600 dark:text-blue-400">│   └── settings_screen.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│       └── Settings screen</div>
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">├── services/</div>
            <div className="ml-4 space-y-1">
              <div className="text-blue-600 dark:text-blue-400">│   ├── high_score_service.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── High score management</div>
              <div className="text-blue-600 dark:text-blue-400">│   ├── settings_service.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│   │   └── Settings persistence</div>
              <div className="text-blue-600 dark:text-blue-400">│   └── theme_service.dart</div>
              <div className="text-gray-500 dark:text-gray-400">│       └── Theme management</div>
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">└── widgets/</div>
            <div className="ml-4 space-y-1">
              <div className="text-blue-600 dark:text-blue-400">    ├── aspect_ratio_wrapper.dart</div>
              <div className="text-gray-500 dark:text-gray-400">    │   └── Aspect ratio wrapper widget</div>
              <div className="text-blue-600 dark:text-blue-400">    └── themed_background.dart</div>
              <div className="text-gray-500 dark:text-gray-400">        └── Themed background widget</div>
            </div>
          </div>
          <div className="mt-2 space-y-1">
            <div className="text-green-600 dark:text-green-400">├── web/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Web platform files</div>
            <div className="text-green-600 dark:text-green-400">├── android/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Android platform files</div>
            <div className="text-green-600 dark:text-green-400">├── ios/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── iOS platform files</div>
            <div className="text-green-600 dark:text-green-400">├── windows/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Windows platform files</div>
            <div className="text-green-600 dark:text-green-400">├── linux/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Linux platform files</div>
            <div className="text-green-600 dark:text-green-400">├── macos/</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── macOS platform files</div>
            <div className="text-purple-600 dark:text-purple-400">├── pubspec.yaml</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Flutter dependencies</div>
            <div className="text-purple-600 dark:text-purple-400">├── firebase.json</div>
            <div className="text-gray-500 dark:text-gray-400">│   └── Firebase Hosting configuration</div>
            <div className="text-purple-600 dark:text-purple-400">└── README.md</div>
            <div className="text-gray-500 dark:text-gray-400">    └── Project documentation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

