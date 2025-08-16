import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Shield, Network, Eye, Zap, Search, Settings, ChevronDown, Play, Download, ExternalLink } from 'lucide-react'
import './App.css'

// Import assets
import logoImage from './assets/escena3_deflectrat_logo.png'
import arquitecturaImage from './assets/escena4_arquitectura_final_corregida.png'
import laboratorioImage from './assets/escena7_laboratorio.png'
import dashboardImage from './assets/escena8_dashboard.png'
import protocolosImage from './assets/escena9_protocolos_scada.png'
import respuestaImage from './assets/escena10_respuesta_automatizada.png'
import forenseImage from './assets/escena11_analisis_forense.png'
import amenazasImage from './assets/escena12_escenarios_amenaza.png'
import metricasImage from './assets/escena13_metricas_rendimiento.png'
import resultadosImage from './assets/escena5_resultados.png'
import banderaImage from './assets/escena6_bandera_argentina_final_corregida.png'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const modules = [
    {
      id: 'nmm',
      name: 'NMM',
      fullName: 'Network Monitoring Module',
      description: 'Monitoreo de redes y protocolos industriales como Modbus, DNP3 y OPC UA',
      icon: Network,
      color: 'bg-blue-500'
    },
    {
      id: 'pam',
      name: 'PAM',
      fullName: 'Process Analysis Module',
      description: 'Análisis de procesos del sistema con técnicas del marco MITRE ATT&CK',
      icon: Eye,
      color: 'bg-orange-500'
    },
    {
      id: 'tim',
      name: 'TIM',
      fullName: 'Threat Intelligence Module',
      description: 'Integración de inteligencia de amenazas de múltiples fuentes',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      id: 'arm',
      name: 'ARM',
      fullName: 'Automated Response Module',
      description: 'Respuesta automática con hasta 15 acciones defensivas',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      id: 'fam',
      name: 'FAM',
      fullName: 'Forensic Analysis Module',
      description: 'Análisis forense y conservación de evidencias digitales',
      icon: Search,
      color: 'bg-indigo-500'
    },
    {
      id: 'cmm',
      name: 'CMM',
      fullName: 'Centralized Management Module',
      description: 'Gestión centralizada e integración mediante ELK Stack',
      icon: Settings,
      color: 'bg-cyan-500'
    }
  ]

  const stats = [
    { label: 'Más Rápido', value: '78%', description: 'Detección de amenazas' },
    { label: 'Detección', value: '96.8%', description: 'En entornos SCADA' },
    { label: 'Menos Costos', value: '74%', description: 'Reducción de gastos' },
    { label: 'Respuesta', value: '23s', description: 'Mitigación njRAT' }
  ]

  const threatScenarios = [
    'njRAT Trojan Deployment',
    'SCADA Protocol Exploitation',
    'Critical Data Exfiltration',
    'Lateral Network Movement',
    'Advanced Persistence'
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'video', 'arquitectura', 'laboratorio', 'resultados', 'soberania']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">DeflectRAT</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['inicio', 'video', 'arquitectura', 'laboratorio', 'resultados', 'soberania'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-400 bg-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img src={logoImage} alt="DeflectRAT Logo" className="mx-auto w-64 h-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DeflectRAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ciberarma Defensiva Autónoma Argentina para la Protección de Infraestructuras Críticas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('video')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Presentación
            </Button>
            <Button 
              onClick={() => scrollToSection('arquitectura')} 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
            >
              Conocer Más
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 text-blue-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Presentación Oficial</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Conoce DeflectRAT a través de la presentación del Ing. Ricardo Alcides Canaveri sobre Ciberarmas Defensivas
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-slate-800/50 border border-blue-500/30">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-slate-900/50">
                <div className="text-center">
                  <Play className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Video Promocional DeflectRAT</h3>
                  <p className="text-gray-300 mb-4">Presentación completa de 8 minutos con audio sincronizado</p>
                  <p className="text-gray-400 text-sm">Video disponible para descarga directa</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 mb-4">Duración: 8 minutos | Calidad: HD 720p | Tamaño: 108MB</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Video Completo
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="arquitectura" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Arquitectura del Sistema</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              DeflectRAT está compuesto por 6 módulos coordinados que garantizan una protección integral
            </p>
          </div>
          
          <div className="mb-12">
            <img src={arquitecturaImage} alt="Arquitectura DeflectRAT" className="mx-auto rounded-lg shadow-2xl max-w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${module.color}`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{module.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">{module.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section id="laboratorio" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Laboratorio de Validación</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Entorno controlado con tres máquinas virtuales para validar el desempeño de DeflectRAT
            </p>
          </div>

          <Tabs defaultValue="laboratorio" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 bg-slate-700">
              <TabsTrigger value="laboratorio">Laboratorio</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="protocolos">Protocolos</TabsTrigger>
              <TabsTrigger value="respuesta">Respuesta</TabsTrigger>
              <TabsTrigger value="forense">Forense</TabsTrigger>
            </TabsList>
            
            <TabsContent value="laboratorio" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Configuración del Laboratorio</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tres máquinas virtuales interconectadas para pruebas exhaustivas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={laboratorioImage} alt="Laboratorio de Validación" className="w-full rounded-lg mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Windows 10 SCADA</h4>
                      <p className="text-gray-300 text-sm">Sistema objetivo con servicios SCADA simulados</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Ubuntu Server</h4>
                      <p className="text-gray-300 text-sm">DeflectRAT y stack ELK</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Kali Linux</h4>
                      <p className="text-gray-300 text-sm">Atacante ejecutando escenarios maliciosos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dashboard" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Monitoreo en Tiempo Real</CardTitle>
                  <CardDescription className="text-gray-400">
                    Dashboard ELK Stack con visualizaciones en tiempo real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={dashboardImage} alt="Dashboard en Tiempo Real" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocolos" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Protocolos Industriales</CardTitle>
                  <CardDescription className="text-gray-400">
                    Soporte para Modbus, DNP3 y OPC UA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={protocolosImage} alt="Protocolos SCADA" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="respuesta" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Respuesta Automatizada</CardTitle>
                  <CardDescription className="text-gray-400">
                    15 acciones defensivas ejecutadas automáticamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={respuestaImage} alt="Respuesta Automatizada" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forense" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Análisis Forense</CardTitle>
                  <CardDescription className="text-gray-400">
                    Preservación y análisis de evidencias digitales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={forenseImage} alt="Análisis Forense" className="w-full rounded-lg" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Resultados Superiores</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              DeflectRAT supera a las soluciones comerciales en todos los aspectos clave
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Escenarios de Amenaza Validados</CardTitle>
                <CardDescription className="text-gray-400">
                  5 vectores de ataque probados exitosamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={amenazasImage} alt="Escenarios de Amenaza" className="w-full rounded-lg mb-4" />
                <div className="space-y-2">
                  {threatScenarios.map((scenario, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-green-500 text-green-400">✓</Badge>
                      <span className="text-gray-300">{scenario}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Métricas de Rendimiento</CardTitle>
                <CardDescription className="text-gray-400">
                  Tiempos de respuesta sub-minuto en todos los escenarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src={metricasImage} alt="Métricas de Rendimiento" className="w-full rounded-lg mb-4" />
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">23 segundos</div>
                    <div className="text-gray-300">Mitigación de njRAT</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sovereignty Section */}
      <section id="soberania" className="py-16 px-6 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img src={banderaImage} alt="Soberanía Tecnológica Nacional" className="mx-auto rounded-lg shadow-2xl max-w-full h-auto" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Soberanía Tecnológica Nacional</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            DeflectRAT representa un avance estratégico para Argentina, garantizando independencia operativa, 
            soberanía de datos y fortalecimiento de la economía nacional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">Independencia Operativa</h4>
              <p className="text-gray-300 text-sm">Control completo de algoritmos de defensa</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">Soberanía de Datos</h4>
              <p className="text-gray-300 text-sm">Sin dependencias externas</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">Personalización Local</h4>
              <p className="text-gray-300 text-sm">Adaptación a amenazas específicas</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">Economía Nacional</h4>
              <p className="text-gray-300 text-sm">Reducción de salida de divisas</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              DeflectRAT: El Futuro de la Ciberdefensa Argentina
            </h3>
            <p className="text-gray-300 mb-8">
              Una demostración de que los países en desarrollo pueden crear soluciones defensivas autónomas 
              que superan a las comerciales, mientras refuerzan su soberanía tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold text-white">DeflectRAT</span>
          </div>
          <p className="text-gray-400 mb-4">
            Ciberarma Defensiva Autónoma Argentina para la Protección de Infraestructuras Críticas
          </p>
          <p className="text-gray-500 text-sm">
            Desarrollado por el Ing. Ricardo Alcides Canaveri | © 2025 Argentina
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

