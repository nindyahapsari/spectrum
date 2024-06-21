import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginVertical: 10,
  },
  body: {
    border: 1,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  airline: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    marginHorizontal: 'auto',
  },
});

type TicketFlightInfoProps = {
  depTimestamp: string;
  returnTimestamp: string;
  city: string;
  flightNumber: string;
  airline: string;
  price: number;
};

function TicketPDF({
  depTimestamp,
  returnTimestamp,
  city,
  flightNumber,
  airline,
  price,
}: Partial<TicketFlightInfoProps>) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Hi User!</Text>
          <Text style={styles.text}>
            Here is your flight information for the upcoming trip.
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Airline: {airline}</Text>
          <Text style={styles.text}>Departure: {depTimestamp}</Text>
          <Text style={styles.text}>Return: {returnTimestamp}</Text>
          <Text style={styles.text}>City: {city}</Text>
          <Text style={styles.text}>Flight Number: {flightNumber}</Text>
          <Text style={styles.text}>Price: €{price}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Thank you for using spectrum </Text>
        </View>
      </Page>
    </Document>
  );
}

export default TicketPDF;
