import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function generateInvoice(order) {

  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.text("FurniHome", 75, 20);

  doc.setFontSize(16);
  doc.text("Invoice", 85, 30);

  doc.setFontSize(12);

  doc.text(`Order ID: ${order._id}`, 14, 45);

  doc.text(
    `Date: ${new Date(order.createdAt).toLocaleDateString()}`,
    14,
    53
  );

  doc.text(
    `Customer: ${order.shippingAddress.fullName}`,
    14,
    61
  );

  doc.text(
    `Phone: ${order.shippingAddress.phone}`,
    14,
    69
  );

  doc.text(
    `Address: ${order.shippingAddress.address}`,
    14,
    77
  );

  doc.text(
    `${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}`,
    14,
    85
  );

  doc.text(
    `Payment: ${order.paymentMethod}`,
    14,
    93
  );

  autoTable(doc, {
    startY: 102,

    head: [[
      "Product",
      "Qty",
      "Price",
      "Subtotal",
    ]],

    body: order.products.map((item) => [

      item.product.name,

      item.quantity,

      `₹${item.product.price.toLocaleString()}`,

      `₹${(
        item.product.price *
        item.quantity
      ).toLocaleString()}`,

    ]),
  });

  doc.setFontSize(14);

  doc.text(
    `Grand Total : ₹${order.totalAmount.toLocaleString()}`,
    14,
    doc.lastAutoTable.finalY + 15
  );

  doc.setFontSize(12);

  doc.text(
    "Thank you for shopping with FurniHome!",
    14,
    doc.lastAutoTable.finalY + 28
  );

  doc.save(`Invoice-${order._id}.pdf`);

}

export default generateInvoice;