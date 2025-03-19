import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MapSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3282331133726!2d90.41194631498255!3d23.81305088456218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xec01cd75f33139f5!2sNikunja%202%2C%20Dhaka%201229%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1620180958034!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}

