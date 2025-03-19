import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm text-muted-foreground">House: 34, Road: 10, Nikunja-2, Dhaka-1229, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-muted-foreground">+880 1234-567890</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">info@heritagejute.com</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Clock className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (GMT+6)</p>
          </div>
        </div>
        <Button className="w-full" variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Google Maps
        </Button>
      </CardContent>
    </Card>
  )
}

