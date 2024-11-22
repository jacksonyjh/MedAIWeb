from rest_framework_xml.renderers import XMLRenderer
from django.utils.encoding import force_str

class CustomXMLRenderer(XMLRenderer):
    root_tag_name = 'Data'

    def _to_xml(self, xml, data):
        if isinstance(data, (list, tuple)):
            for item in data:
                xml.startElement("Patient", {})
                self._to_xml(xml, item)
                xml.endElement("Patient")

        elif isinstance(data, dict):
            for key, value in data.items():
                if key == "TestData":
                    xml.startElement("TestData", {})
                    if isinstance(value, list):
                        for demo in value:
                            xml.startElement("TestDemographics", {})
                            self._to_xml(xml, demo)
                            xml.endElement("TestDemographics")
                    xml.endElement("TestData")
                elif key == "ECGData":
                    xml.startElement("ECGData", {})
                    if isinstance(value, list):
                        for measurement in value:
                            xml.startElement("ECGMeasurements", {})
                            self._to_xml(xml, measurement)
                            xml.endElement("ECGMeasurements")
                    xml.endElement("ECGData")
                else:
                    xml.startElement(key, {})
                    self._to_xml(xml, value)
                    xml.endElement(key)

        elif data is None:
            # Don't output any value for None
            pass

        else:
            xml.characters(str(data))