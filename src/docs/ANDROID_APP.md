# 📱 Portfólio Android - Guia de Conversão

Este documento descreve como o portfólio web pode ser convertido em um aplicativo Android nativo.

---

## 🎯 Visão Geral

O portfólio web foi desenvolvido com estrutura modular e dados separados, facilitando a conversão para aplicativo Android.

---

## 🏗️ Arquitetura Sugerida

### Stack Tecnológico:

```kotlin
// Build.gradle.kts (Module: app)
dependencies {
    // Core
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")

    // Jetpack Compose
    implementation(platform("androidx.compose:compose-bom:2024.02.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.ui:ui-tooling-preview")

    // Navigation
    implementation("androidx.navigation:navigation-compose:2.7.6")

    // ViewModel
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.7.0")

    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")

    // Networking
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")

    // Image Loading
    implementation("io.coil-kt:coil-compose:2.5.0")

    // Animations
    implementation("androidx.compose.animation:animation:1.6.0")

    // Local Storage
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    kapt("androidx.room:room-compiler:2.6.1")
}
```

---

## 📐 Estrutura de Telas

### 1. **MainActivity**

- NavHost principal
- BottomNavigationBar ou NavigationRail
- Scaffold com TopAppBar

### 2. **HomeScreen** (Hero Section)

- Animated Introduction
- Profile Avatar
- Tech Stack Badges
- CTA Buttons

### 3. **AboutScreen** (Sobre)

- Profile Card
- Timeline Vertical
- Education & Experience
- Stats Cards

### 4. **ProjectsScreen** (Projetos)

- LazyVerticalGrid
- FilterChips (Mobile, Web, IA)
- Project Cards com imagens
- Detail Navigation

### 5. **ProjectDetailScreen**

- Hero Image
- Description
- Technologies Grid
- Features List
- Links (GitHub, Demo)

### 6. **SkillsScreen** (Habilidades)

- Categorized Skills
- Progress Indicators
- Tools Grid
- Certifications

### 7. **ContactScreen** (Contato)

- Contact Info Cards
- Social Links
- Contact Form (opcional)
- Map Integration (opcional)

---

## 🎨 Conversão de Componentes

### Web → Android Compose

| Componente Web   | Componente Android       | Biblioteca        |
| ---------------- | ------------------------ | ----------------- |
| `<div>`          | `Box` / `Column` / `Row` | Compose           |
| `<section>`      | `Surface` com padding    | Material3         |
| `motion.div`     | `AnimatedVisibility`     | Compose Animation |
| Tailwind classes | `Modifier` chains        | Compose           |
| `onClick`        | `clickable()`            | Compose           |
| CSS Grid         | `LazyVerticalGrid`       | Compose           |
| Flexbox          | `Row` / `Column`         | Compose           |

### Exemplo de Conversão:

**React/TypeScript:**

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  className="px-8 py-4 bg-gradient-to-r from-[#1261A0] rounded-lg"
>
  Ver Projetos
</motion.button>
```

**Kotlin/Compose:**

```kotlin
var isPressed by remember { mutableStateOf(false) }
val scale by animateFloatAsState(if (isPressed) 0.95f else 1f)

Button(
    onClick = { /* navigate */ },
    modifier = Modifier
        .scale(scale)
        .pointerInput(Unit) {
            detectTapGestures(
                onPress = {
                    isPressed = true
                    tryAwaitRelease()
                    isPressed = false
                }
            )
        },
    colors = ButtonDefaults.buttonColors(
        containerColor = Color(0xFF1261A0)
    )
) {
    Text("Ver Projetos")
}
```

---

## 💾 Estrutura de Dados

### 1. **Data Classes**

```kotlin
// models/Project.kt
data class Project(
    val id: Int,
    val title: String,
    val slug: String,
    val category: ProjectCategory,
    val status: ProjectStatus,
    val description: String,
    val longDescription: String,
    val imageUrl: String,
    val technologies: List<String>,
    val features: List<String>,
    val githubUrl: String?,
    val demoUrl: String?,
    val year: Int
)

enum class ProjectCategory {
    MOBILE, WEB, IA
}

enum class ProjectStatus {
    PRODUCTION, DEVELOPMENT, CONCEPT
}
```

```kotlin
// models/Skill.kt
data class SkillCategory(
    val id: String,
    val title: String,
    val icon: String,
    val color: String,
    val skills: List<Skill>
)

data class Skill(
    val name: String,
    val level: Int, // 0-100
    val years: Int
)
```

```kotlin
// models/TimelineItem.kt
data class TimelineItem(
    val id: Int,
    val year: String,
    val title: String,
    val institution: String,
    val icon: String,
    val type: TimelineType,
    val description: String,
    val skills: List<String>
)

enum class TimelineType {
    EDUCATION, PROJECT
}
```

### 2. **Repository Pattern**

```kotlin
// repository/PortfolioRepository.kt
class PortfolioRepository(
    private val localDataSource: LocalDataSource,
    private val remoteDataSource: RemoteDataSource?
) {
    suspend fun getProjects(): List<Project> {
        return try {
            remoteDataSource?.getProjects() ?: localDataSource.getProjects()
        } catch (e: Exception) {
            localDataSource.getProjects()
        }
    }

    suspend fun getProjectBySlug(slug: String): Project? {
        return localDataSource.getProjectBySlug(slug)
    }

    // ... outros métodos
}
```

### 3. **Local Data Source (JSON)**

```kotlin
// data/LocalDataSource.kt
class LocalDataSource(private val context: Context) {

    private val gson = Gson()

    fun getProjects(): List<Project> {
        val json = context.assets.open("projects.json")
            .bufferedReader()
            .use { it.readText() }

        val response = gson.fromJson(json, ProjectsResponse::class.java)
        return response.projects
    }

    // ... outros métodos
}
```

**Estrutura de Assets:**

```
app/src/main/assets/
├── projects.json
├── skills.json
└── timeline.json
```

---

## 🎨 Design System

### Theme.kt

```kotlin
// ui/theme/Color.kt
val PetrolBlue = Color(0xFF0A1128)
val ElectricBlue = Color(0xFF1261A0)
val SoftGray = Color(0xFFE2E8F0)
val DeepBlack = Color(0xFF050505)

// ui/theme/Theme.kt
private val DarkColorScheme = darkColorScheme(
    primary = ElectricBlue,
    onPrimary = Color.White,
    secondary = SoftGray,
    background = PetrolBlue,
    surface = PetrolBlue,
    onSurface = Color.White
)

@Composable
fun PortfolioTheme(
    darkTheme: Boolean = true,
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = DarkColorScheme,
        typography = Typography,
        content = content
    )
}
```

### Typography.kt

```kotlin
val Typography = Typography(
    displayLarge = TextStyle(
        fontFamily = FontFamily.SansSerif, // Poppins
        fontWeight = FontWeight.Bold,
        fontSize = 57.sp
    ),
    headlineMedium = TextStyle(
        fontFamily = FontFamily.SansSerif,
        fontWeight = FontWeight.SemiBold,
        fontSize = 28.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily.SansSerif, // Inter
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp
    )
)
```

---

## 🚀 Navegação

### NavGraph.kt

```kotlin
@Composable
fun PortfolioNavGraph(
    navController: NavHostController = rememberNavController()
) {
    NavHost(
        navController = navController,
        startDestination = "home"
    ) {
        composable("home") {
            HomeScreen(navController)
        }
        composable("about") {
            AboutScreen()
        }
        composable("projects") {
            ProjectsScreen(navController)
        }
        composable(
            route = "project/{slug}",
            arguments = listOf(navArgument("slug") { type = NavType.StringType })
        ) { backStackEntry ->
            ProjectDetailScreen(
                slug = backStackEntry.arguments?.getString("slug") ?: ""
            )
        }
        composable("skills") {
            SkillsScreen()
        }
        composable("contact") {
            ContactScreen()
        }
    }
}
```

---

## 🎭 Animações

### Parallax Effect

```kotlin
@Composable
fun ParallaxEffect(
    scrollState: ScrollState,
    parallaxFactor: Float = 0.5f,
    content: @Composable (offsetY: Float) -> Unit
) {
    val offsetY = scrollState.value * parallaxFactor
    content(offsetY)
}
```

### Fade In Animation

```kotlin
@Composable
fun FadeInSection(
    visible: Boolean = true,
    content: @Composable () -> Unit
) {
    AnimatedVisibility(
        visible = visible,
        enter = fadeIn(
            animationSpec = tween(durationMillis = 800)
        ) + slideInVertically(
            initialOffsetY = { it / 4 }
        )
    ) {
        content()
    }
}
```

---

## 📊 ViewModels

### ProjectsViewModel.kt

```kotlin
class ProjectsViewModel(
    private val repository: PortfolioRepository
) : ViewModel() {

    private val _projects = MutableStateFlow<List<Project>>(emptyList())
    val projects: StateFlow<List<Project>> = _projects.asStateFlow()

    private val _selectedCategory = MutableStateFlow<ProjectCategory?>(null)
    val selectedCategory: StateFlow<ProjectCategory?> = _selectedCategory.asStateFlow()

    val filteredProjects: StateFlow<List<Project>> = combine(
        _projects,
        _selectedCategory
    ) { projects, category ->
        category?.let { cat ->
            projects.filter { it.category == cat }
        } ?: projects
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = emptyList()
    )

    init {
        loadProjects()
    }

    private fun loadProjects() {
        viewModelScope.launch {
            _projects.value = repository.getProjects()
        }
    }

    fun selectCategory(category: ProjectCategory?) {
        _selectedCategory.value = category
    }
}
```

---

## 🔗 Deep Links

### AndroidManifest.xml

```xml
<activity
    android:name=".MainActivity"
    android:exported="true">

    <!-- Deep Link: portfolio://project/slug -->
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="portfolio"
            android:host="project" />
    </intent-filter>

    <!-- Web Link: https://abmaelribeiro.com/project/slug -->
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="https"
            android:host="abmaelribeiro.com"
            android:pathPrefix="/project" />
    </intent-filter>
</activity>
```

---

## 📱 Features Android-Specific

### 1. **Share Intent**

```kotlin
fun shareProject(context: Context, project: Project) {
    val intent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_SUBJECT, project.title)
        putExtra(Intent.EXTRA_TEXT,
            "Confira o projeto ${project.title}: https://portfolio.com/project/${project.slug}"
        )
    }
    context.startActivity(Intent.createChooser(intent, "Compartilhar via"))
}
```

### 2. **Browser Intent**

```kotlin
fun openGithub(context: Context, url: String) {
    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
    context.startActivity(intent)
}
```

### 3. **WhatsApp Intent**

```kotlin
fun openWhatsApp(context: Context, phoneNumber: String) {
    val intent = Intent(Intent.ACTION_VIEW).apply {
        data = Uri.parse("https://wa.me/$phoneNumber")
    }
    context.startActivity(intent)
}
```

---

## 🎨 Componentes Reutilizáveis

### ProjectCard.kt

```kotlin
@Composable
fun ProjectCard(
    project: Project,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .clickable { onClick() },
        elevation = CardDefaults.cardElevation(
            defaultElevation = 8.dp
        )
    ) {
        Column {
            // Image
            AsyncImage(
                model = project.imageUrl,
                contentDescription = project.title,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp),
                contentScale = ContentScale.Crop
            )

            // Content
            Column(
                modifier = Modifier.padding(16.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text(
                        text = project.title,
                        style = MaterialTheme.typography.headlineSmall
                    )
                    ProjectStatusBadge(status = project.status)
                }

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = project.description,
                    style = MaterialTheme.typography.bodyMedium,
                    maxLines = 3,
                    overflow = TextOverflow.Ellipsis
                )

                Spacer(modifier = Modifier.height(12.dp))

                FlowRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    project.technologies.take(3).forEach { tech ->
                        TechBadge(tech = tech)
                    }
                }
            }
        }
    }
}
```

---

## 🚀 Roadmap de Desenvolvimento

### Fase 1: Setup (1-2 semanas)

- [ ] Criar projeto Android Studio
- [ ] Configurar Jetpack Compose
- [ ] Setup de navegação
- [ ] Implementar design system
- [ ] Copiar JSON files para assets

### Fase 2: Telas Principais (2-3 semanas)

- [ ] HomeScreen
- [ ] AboutScreen
- [ ] ProjectsScreen
- [ ] SkillsScreen
- [ ] ContactScreen

### Fase 3: Detalhes (1-2 semanas)

- [ ] ProjectDetailScreen
- [ ] Animações
- [ ] Deep links
- [ ] Share functionality

### Fase 4: Polish (1 semana)

- [ ] Loading states
- [ ] Error handling
- [ ] Offline mode
- [ ] Performance optimization

### Fase 5: Release (1 semana)

- [ ] Testes
- [ ] Play Store assets
- [ ] Release build
- [ ] Publicação

**Total estimado: 6-9 semanas**

---

## 📦 Estrutura de Pastas

```
app/src/main/
├── java/com/abmaelribeiro/portfolio/
│   ├── data/
│   │   ├── local/
│   │   │   └── LocalDataSource.kt
│   │   ├── models/
│   │   │   ├── Project.kt
│   │   │   ├── Skill.kt
│   │   │   └── TimelineItem.kt
│   │   └── repository/
│   │       └── PortfolioRepository.kt
│   ├── ui/
│   │   ├── components/
│   │   │   ├── ProjectCard.kt
│   │   │   ├── SkillBar.kt
│   │   │   └── StatusBadge.kt
│   │   ├── screens/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   └── contact/
│   │   └── theme/
│   │       ├── Color.kt
│   │       ├── Theme.kt
│   │       └── Type.kt
│   ├── navigation/
│   │   └── NavGraph.kt
│   └── MainActivity.kt
└── assets/
    ├── projects.json
    ├── skills.json
    └── timeline.json
```

---

## 🎓 Recursos Úteis

- [Jetpack Compose Docs](https://developer.android.com/jetpack/compose)
- [Material Design 3](https://m3.material.io/)
- [Compose Samples](https://github.com/android/compose-samples)
- [Now in Android App](https://github.com/android/nowinandroid)

---

**Autor:** Abmael Ribeiro  
**Versão:** 1.0.0  
**Última atualização:** 2025
