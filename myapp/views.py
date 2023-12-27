from django.shortcuts import render
from .models import Product
from django.http import JsonResponse
# Create your views here.

def index(request):
    products = Product.objects.all()
    context = {"products": products}
    return render(request, "index.html", context)


def products(request):
    products = Product.objects.all()
    ajax_products = [{"name": product.name, 
                      "price": product.price, 
                      "discount": product.discounted_price,
                      "thumbnail": product.thumbnail.url} for product in products]
    return JsonResponse(ajax_products, safe=False)
 