import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { HomePage } from "../pages/HomePage"
import { AboutusPage } from "../pages/AboutusPage"
import { ContactPage } from "../pages/ContactPage"
import { EventPages } from "../pages/EventPages"
import { BlogPage } from "../pages/BlogPage"
import { CreateEventForm } from "../pages/CreateEventForm"
import { Toaster } from "react-hot-toast"
import { DetailsEvent } from "../pages/DetailsEvent"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventPages />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create-event" element={<CreateEventForm />} />
          <Route path="/details-event" element={<DetailsEvent />} />
        </Route>

        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}
